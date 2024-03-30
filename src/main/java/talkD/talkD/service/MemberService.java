package talkD.talkD.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import talkD.talkD.dto.MemberDTO;
import talkD.talkD.repository.MemberRepository;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    public void save(MemberDTO memberDTO) {
    }
}
