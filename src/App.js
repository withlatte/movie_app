import React from "react";
import PropTypes from "prop-types";

// prop-types 는 내가 사용한 props 이름이 제대로 사용되었는지 확인해 주는 어플리케이션이다.
// 콘솔에서 npm i prop-types 를 실행시켜 설치 후 사용한다.

function Food({ name, picture, rating }) {
  // {name} = props.name
  return (
    <div>
      <h3>I love {name}!!!</h3>
      <h4>rating: {rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// 아래의 propTypes는 반드시 사용되야 하는 이름이다. sexyTypes와 같이 변경할 수 없다.
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

// props > key 는 단순히 react의 unique variable 값 오류를 없애기 위해 사용한다.
function renderFood(food) {
  return (
    <Food
      key={food.id}
      name={food.name}
      picture={food.image}
      rating={food.rating}
    />
  );
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

const foodILike = [
  {
    id: 1,
    rating: 5,
    name: "kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
  {
    rating: 2.5,
    id: 2,
    name: "삼겹살",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
  },
  {
    id: 3,
    rating: 1,
    name: "비빔밥",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
  },
  {
    id: 4,
    rating: 3.5,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
  },
  {
    id: 5,
    rating: 4,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
  },
];
export default App;
