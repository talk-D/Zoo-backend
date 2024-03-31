package talkD.talkD.dto;

import lombok.*;

//DTO클래스는 회원정보에 필요한 필드를 저장한다. 클래스의 필드를 모두 다 프라이빗으로 저장.
//lombok을 이용하여 getter setter 등등 필드의 매개변수자를 따로 코드짤 필요 없이 어너테이션을 입력해주면 자동으로 생긴다.
//DTO는 데이터 전송을 위해 사용되는 객체이고, Entity는 데이터베이스의 테이블과 매핑되는 객체
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MemberDTO {
    // DTO필드 값과 html 파일의 입력받은 name값이 동일하다면 자동으로 setter를 호출하여 자동으로 값을 담아준다.
    //전달하는 파라미터 양이 많아 질 수록 코드를 더 효율적으로 짤 수 있다.
    private Long id;
    private String memberEmail;
    private String memberPassword;
    private String memberName;
}
