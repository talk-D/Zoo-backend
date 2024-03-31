package talkD.talkD.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import talkD.talkD.dto.MemberDTO;

//Entity는 테이블 역학
//데이터 entity라는 것은 테이블을 자바 객체처럼 관리할 수 있게 해준다.
@Entity
@Getter
@Setter
//테이블 이름 정하기
@Table(name = "member_table")
public class MemberEntity {
    @Id //기본키 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) //mysql의 auto_increment를 지정
    private Long id;

    @Column(unique = true) // unique 제약조건 추가
    private String memberEmail;

    @Column
    private String memberPassword;

    @Column
    private String memberName;

    //DTO -> Entity 변환
    //DTO는 데이터 전송을 위해 사용되는 객체이고, Entity는 데이터베이스의 테이블과 매핑되는 객체
    //'toMemberEntity'라는 MemberDTO 객체를 MemberEntity 객체로 변환하는 메서드 셍성
    public static MemberEntity toMemberEntity(MemberDTO memberDTO){
        MemberEntity memberEntity = new MemberEntity();
        memberEntity.setMemberEmail(memberDTO.getMemberEmail());
        memberEntity.setMemberPassword(memberDTO.getMemberPassword());
        memberEntity.setMemberName(memberDTO.getMemberName());
        return memberEntity;
    }
}
