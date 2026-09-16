# Architecture (draft)

## 레이어 구조

```
routes -> controllers -> services -> config/db (in-memory store)
```

- `routes/`: URL과 HTTP 메서드 정의만. 로직 없음.
- `controllers/`: req/res 파싱, 서비스 호출, 응답 포맷.
- `services/`: 실제 비즈니스 로직. 여기에 전부 있음.
- `config/db.js`: 임시 in-memory 저장소. 나중에 진짜 DB로 교체 예정 (안 됨).

## 인증

`middleware/auth.js` 에서 `x-api-key` 헤더 검사함.
프론트엔드 팀한테 키 공유는... 어떻게 했는지 기록이 없음.

## TODO

- [ ] 알림/리마인더 관련 기능 기획 문서 찾기 (Slack에 있었던 것 같은데)
- [ ] 테스트 커버리지 올리기
- [ ] 이 문서 마무리하기

<!-- 마지막 수정: 퇴사 3일 전 -->
