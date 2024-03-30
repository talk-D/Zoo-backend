package talkD.talkD.controller;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import talkD.talkD.dto.MemberDTO;
import talkD.talkD.service.MemberService;

@Controller
//롬복에서 제공하는 어너테이션. 생성자 주입
@RequiredArgsConstructor
public class MemberController {
    //생성자 주입 따로 생성자 선언(Member member = new Member())할 필요없이 @RequiredArgsConstructor를 이용해 생성자를 주입할 수 있다.
    private final MemberService memberService;

    //회원가입 페이지 출력 요청
    @GetMapping("/member/save")
    public String saveForm(){
        return "save";
    }
    @PostMapping("/member/save")
    public String save(@ModelAttribute MemberDTO memberDTO){
        /*save() 매서드 안에 '@RequestParam("memberEmail") String memberEmail,
                       @RequestParam("memberPassword") String memberPassword,
                       @RequestParam("memberPasswordCheck") String memberPasswordCheck'들을 넣는 걸 대신해서
                       '@ModelAttribute MemberDTO memberDTO' 한줄로 작성할 수 있다.
                       @ModelAttribute을 생략할 수 도 있지만 명시하는 것이 좋다.
        */
        //매서드 정상실행되면 콘솔에 로그 남음.
        System.out.println("MemberController.save"); //단축키 : soutm
        System.out.println("memberDTO = " + memberDTO); //단축키 : soutp
        memberService.save(memberDTO); //!tip: memberService에 save라는 메서드를 만들기 전 save에 마우스대고 option 누르면 바로 생성가능
        return "home";
    }
    //로그인 페이지 출력 요청
    @GetMapping("/member/login")
    public String loginForm() {
        return "login";
    }

}
