package talkD.talkD.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

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
}
