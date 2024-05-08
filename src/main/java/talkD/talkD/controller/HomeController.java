package talkD.talkD.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
//git 잔디 테스트 2
@Controller
public class HomeController {

    @GetMapping("/")
    public String Home() {
        return "home";
    }
}
