/* GET about page. */
module.exports.aboutS2C = function(req, res){
    res.render('aboutS2C', {
      title: 'About S2C',
      pageHeader:{
        title : '연구실소개',
        strapline : 'Scientific and Statistical Computing Lab.'
      },
      labNameKor : '통계 컴퓨팅 랩',
      labNameEng : 'Scentific & Statistical Computing Lab',
      headerName : '한경수',
      field : '교육 콘텐츠 제작',
      homePage : 'http://enook.jbnu.ac.kr/courses',
      
      description:{
        describe1:'전북대학교 S2C Lab은 1992년에 설립되었습니다. 이후 사회적인 수요에 맞추어 통계와 컴퓨터를 다룰 수 있는 인재를 양성하는 연구소로 자리잡아 나갔습니다.',
        describe2:'S2C란 Scientific and Statistical Computing을 의미하며 Statistical Computing, Data Mining, Statistics Education에 매진하고 있습니다.',
        describe3:'본 연구실은 다양한 기관과 엽조하여 연구 및 개발을 수행함으로서 지역거점 대학 및 국가의 연구개발 인력 향상에 이바지하고 있습니다.'
      },
      picture_image: '/images/school/jbnu.jpg'
      });
};