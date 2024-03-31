package talkD.talkD.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import talkD.talkD.dto.MemberDTO;
import talkD.talkD.entity.MemberEntity;
import talkD.talkD.repository.MemberRepository;

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
}
