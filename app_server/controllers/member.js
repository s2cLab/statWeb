/* GET home page. */
module.exports.member = function(req, res){
    res.render('member-list', {
      title: 'MemberList',
      pageHeader1:{
        title : 'Professor',
        strapline : 'A Great Faculty'
      },
      pageHeader2:{
        title : 'Alumni',
        strapline : '우주최강 Good Student'
      },
      sidebar: 'sidebar',
      professor:[{
        name : '한경수',
        diploma : '',
        position : '교수',
        living_address : '전라북도 전주시 송천동',
        faculty_address : '전북대학교 통계학과',
        email_address : 'kshan@jbnu.ac.kr',
        phone_num : 'none',
        picture_image: "/images/member/hanks.gif",
        site_address : 'http://blog.naver.com/kshan226',
        site_name : '境界를 넘어서',
        hlink : 'member/hanks'
      },{
        name : '안정용',
        diploma : '',
        position : '교수',
        living_address : '전라북도 전주시 서곡',
        faculty_address : '전북대학교 통계학과',
        email_address : 'kshan@jbnu.ac.kr',
        phone_num : 'none',
        picture_image: "/images/member/jyahn.jpg",
        site_address : 'http://blog.naver.com/ahn9739',
        site_name : '지재천리',
        hlink : 'member/ahn'
      }, {
        name : '문길성',
        diploma : '',
        position : '교수',
        living_address : '전라북도 전주시 서곡',
        faculty_address : '전북대학교 통계학과',
        email_address : 'kshan@jbnu.ac.kr',
        phone_num : 'none',
        picture_image: "/images/member/moon.jpg",
        site_address : 'http://barlack.blog.me/60012132996',
        site_name : "Don't want everything!",
        hlink : 'member/moon'
      }],
      student:[{
        name : '김은지',
        diploma : 'Master',
        position : '대학원생',
        living_address : '광주광역시 남구',
        faculty_address : '전북대학교 통계학과',
        email_address : 'eunjeekej43@naver.com',
        picture_image: "/images/member/eunji.jpg",
        phone_num : 'none',
        site_address : '',
        site_name : '',
        hlink : 'member/eun'
      },{
        name : '염상우',
        diploma : 'Bachelor',
        position : '학부생',
        living_address : '전라북도 전주시 효자동',
        faculty_address : '전북대학교 통계학과',
        email_address : 'duatkddn@naver.com',
        phone_num : '010-2892-5135',
        picture_image: "/images/member/yeom.jpg",
        site_address : 'https://210.117.171.198:3000',
        site_name : 'Ystory',
        hlink : 'member/yeom'
      },{
        name : '이종원',
        diploma : 'Bachelor',
        position : '학부생',
        living_address : '전라북도 익산시 함열읍',
        faculty_address : '전북대학교 통계학과',
        email_address : 'niceguy1575@naver.com',
        picture_image: "/images/member/jong.jpg",
        phone_num : '010-9274-1575',
        site_address : 'https://210.117.171.195:3000',
        site_name : '',
        hlink : 'member/jong'
      }]
  });
};
