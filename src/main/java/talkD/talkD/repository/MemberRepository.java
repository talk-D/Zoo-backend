package talkD.talkD.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import talkD.talkD.entity.MemberEntity;

//리포지토리 인터페이스는 JpaRepository를 상속 받는다.규칙<어떤 엔티티를 받을 것인가, 엔티티의 타입>
public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
}
