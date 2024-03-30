$ git log

// git commit을 한 내역을 확인

$ git log --branches --not --remotes

// push하지 않은 commit 목록만 확인하기

$ git push -u <원격 저장소 이름> <브랜치 이름>

$ git push origin master

$ git push

원격 저장소와 브랜치 이름 없이 입력하면, 현재 브랜치의 원격 저장소로 push된다.
특정 저장소나 브랜치로 push 하려고 하는게 아니라면 그냥 git push만 해줘도 된다.

*git commit과 push의 차이
우리가 데이터를 변경한 후 commit을 하면 그 내역은 로컬 저장소에 반영이 된다.
즉, 내 pc 내의 저장소에만 반영이 된 것이다.
로컬저장소에 반영된 변경 사항을 원격에도 반영하기 위한 도구가 push다.
commit한 내역을 push하게 되면, 이제 원격 저장소에도 그 내역이 업데이트 되는 것이다.
# Zoo-backend
# Zoo-backend
