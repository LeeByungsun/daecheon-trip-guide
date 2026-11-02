// 공개 후기 요약. 날짜를 확인하지 못한 경우 추정하지 않는다.
const reviews = {
'대천항 오뚜기횟집': [['작성일 확인 필요','회 코스와 함께 여러 곁들임 음식이 나왔지만, 일부 생선 요리는 취향에 맞지 않았다는 후기.','https://www.diningcode.com/profile.php?rid=oDhwx82DX8qf']],
'정남수산 33호': [['2022년경','회와 낙지, 꽃게찜, 매운탕을 함께 먹었다는 방문기. 오래된 후기이므로 메뉴 확인 필요.','https://www.ezday.co.kr/bbs/view_board.html?q_id_info=1041&q_sq_board=8753838']],
'용신호수산': [['작성일 확인 필요','시장에서 고른 해산물을 2층에서 먹고 도다리회와 꽃게찜을 주문했다는 후기.','https://www.diningcode.com/profile.php?rid=aBi36eCZCKNJ']],
'대천항회타운': [['2016년','회와 꽃게찜을 먹었다는 오래된 후기. 현재 꽃게찜 판매 여부는 확인 필요.','https://www.diningcode.com/profile.php?rid=TozvHsgNKreT']],
'여수어람': [['2025년','다양한 해산물이 곁들여진 회 상차림을 소개한 방문기.','https://postmate.waffle-gl.org/link/detail/belief87/223852131421']],
'대천횟집': [['작성일 확인 필요','바다 전망이 보이는 좌석과 회·조개구이를 함께 고를 수 있다는 후기.','https://www.diningcode.com/profile.php?rid=69xyxQCVhw0V']],
'해녀횟집': [['작성일 확인 필요','모둠회 곁들임 음식이 다양하고 2층에서 바다가 보인다는 후기.','https://www.diningcode.com/profile.php?rid=14BFHVOqeDpx']],
'고기요': [['2023년','삼겹살과 갈매기살은 마음에 들었지만 항정살과 라면은 아쉬웠다는 후기.','https://sinimalhaetda.com/board/food-korea/1887']],
'왔슈 고깃집': [['8월 13일 · 연도 확인 필요','솥뚜껑 삼겹살과 목살을 주문했고, 매장과 반찬을 살펴본 방문기.','https://www.diningcode.com/profile.php?rid=nnIRKfsKmM1V']],
'돈돼지삼겹살': [['작성일 확인 필요','삼겹살에 묵은지를 곁들이고 셀프 볶음밥을 먹은 후기.','https://www.diningcode.com/profile.php?rid=G66JT2IErF2t']],
'통큰대구막창 대천점': [['2025년 7월','막창과 삼겹살이 초벌로 나와 편하고 매장이 넓다는 방문기.','https://www.miniseries.co.kr/boardView.do?bbsNo=W5V92ndkvD7syQPQ5bo5&menuId=4I1x3']],
'BHC 대천해수욕장점': [['2025년 12월','리조트 숙박 중 포장한 치킨이 잘 튀겨졌고 매장도 깔끔해 보였다는 후기.','https://www.diningcode.com/profile.php?rid=zC1qbbUyQzh5']],
'60계 치킨 대천해수욕장점': [['2024년 11월','야외 좌석에서 치맥을 즐겼고 고추치킨이 갓 튀겨져 맛있었다는 후기.','https://www.diningcode.com/profile.php?rid=5H4NhTqaobPU']],
'네네치킨 대천해수욕장점': [['작성일 확인 필요','치킨과 피자를 주문했고 창가에서 바다를 볼 수 있었다는 방문기. 주소는 자료별로 달라 확인 필요.','https://www.diningcode.com/profile.php?rid=LkC9joCwQESg']],
'마니마니조개구이': [['2026년 10월','조개구이와 삼겹살을 함께 즐긴 방문 후기가 검색됨.','https://hamgae.com/place/52073/마니마니조개구이/']],
'삼선조개카페': [['2026년 9월','바다 전망과 조개구이, 다양한 좌석을 소개한 방문기.','https://xn--2n2by3a68do8s.xn--ok0b236bp0a.com/2znt5g']],
'청해횟집': [['작성일 확인 필요','해물칼국수를 먹었고 조개구이·삼합 메뉴도 확인했다는 후기.','https://www.th-study.com/blogs/life/730/show']],
'팔도강산': [['작성일 확인 필요','해물뚝배기에 해산물이 풍부했지만 재방문 의사는 확실하지 않다는 후기.','https://www.diningcode.com/profile.php?rid=6fNRwrZy4TCT']],
'더드림육해공삼합': [['작성일 확인 필요','넓은 매장에서 육해공 삼합을 먹은 방문기.','https://www.diningcode.com/profile.php?rid=uNQW22bXOsHq']]
};
