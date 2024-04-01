package talkD.talkD.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import talkD.talkD.dto.MemberDTO;
import talkD.talkD.entity.MemberEntity;
import talkD.talkD.repository.MemberRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

//service는 기능(?) 담당
@Service
@RequiredArgsConstructor
public class MemberService {
    //서비스에서 리포지토리로 데이터 넘김 > 리포지토리는 DB로 데이터 넘김
    private final MemberRepository memberRepository;
    public void save(MemberDTO memberDTO) {
        // 1. dto -> entity 변환(방식은 다양하다. 가장 많이 쓰이는 방식으로 코드짜줌)
        //DTO는 데이터 전송을 위해 사용되는 객체이고, Entity는 데이터베이스의 테이블과 매핑되는 객체
        MemberEntity memberEntity = MemberEntity.toMemberEntity(memberDTO);
        // 2. repository의 save 메서드 호출
        memberRepository.save(memberEntity); //save는 jpa에서 제공하는 매서드
        // repository의 save메서드 호출 (조건. entity객체를 넘겨줘야 함)
    }

    public MemberDTO login(MemberDTO memberDTO) {
        /*
            1. 회원이 입력한 이메일로 DB에서 조회를 함
            2. DB에서 조회한 비밀번호와 사용자가 입력한 비밀번호가 일치하는지 판단
         */
        //memberRepository애서 memberDTO.getMemberEmail()와 같은 DB에 저장된 MemberEmail을 찾아 byMemberEmail에 저장
        //즉 byMemberEmail은 DB에서 찾아온 데이터.
        Optional<MemberEntity> byMemberEmail = memberRepository.findByMemberEmail(memberDTO.getMemberEmail());
        if (byMemberEmail.isPresent()) {
            // 조회 결과가 있다(해당 이메일을 가진 회원 정보가 있다)
            //get() 메서드는 optional로 감싸져 있는 객체의 포장지를 벗겨낸다.
            MemberEntity memberEntity = byMemberEmail.get();
            //string값 비교할 땐 ==말고 equals라는 메서드를 사용해야함.
            //memberEntity = DB에서 가져온 데이터, memberDTO = 로그인창에서 입력받은 데이터.
            if (memberEntity.getMemberPassword().equals(memberDTO.getMemberPassword())) {
                // 비밀번호 일치
                // entity -> dto 변환 후 리턴(entity객체는 service에서만 사용하고 controller로 넘길땐 dto로 변환해서 줌)
                MemberDTO dto = MemberDTO.toMemberDTO(memberEntity);
                return dto;
            } else {
                // 비밀번호 불일치(로그인실패)
                return null;
            }
        } else {
            // 조회 결과가 없다(해당 이메일을 가진 회원이 없다)
            return null;
        }
    }

    public List<MemberDTO> findAll() {
        List<MemberEntity> memberEntityList = memberRepository.findAll(); //memberRepository.findAll() = 리포지토리가 제공해주는 메서드
        List<MemberDTO> memberDTOList = new ArrayList<>();
        for (MemberEntity memberEntity: memberEntityList) { //for each문
            memberDTOList.add(MemberDTO.toMemberDTO(memberEntity));
//            MemberDTO memberDTO = MemberDTO.toMemberDTO(memberEntity);
//            memberDTOList.add(memberDTO);
        }
        return memberDTOList;
    }
}
