package talkD.talkD.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import talkD.talkD.entity.MemberEntity;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
}
