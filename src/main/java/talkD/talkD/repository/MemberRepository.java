package talkD.talkD.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import talkD.talkD.entity.MemberEntity;

import java.util.Optional;

//리포지토리 인터페이스는 JpaRepository를 상속 받는다.규칙<어떤 엔티티를 받을 것인가, 엔티티의 타입>
public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
    // 이메일로 회원 정보 조회 (select * from member_table where member_email=?)
    //MemberEntity객체로 받아와서 memberEmail으로 넘겨준다.
    Optional<MemberEntity> findByMemberEmail(String memberEmail); //findByMemberEmail 메서드 정의
}
