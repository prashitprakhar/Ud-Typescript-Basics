import {FbLike} from './fbLike';

let likes = new FbLike(12, true);

likes.onClickLikeBtn();

console.log(`Likes count New ${likes.numberOfLikes} and current status of like button is ${likes.buttonStatus}`);

/*import { Point } from './point';

let point = new Point(1, 5);


point.draw();
*/

/*//Type Assertions - 2 Methods

let message;
message = 'abc';

//Method 1
let typeOne = (<string>message).endsWith('c');

//Method 2
let alternativeWay = (message as string).endsWith('c');

console.log(typeOne);
console.log(alternativeWay);

let logger = (message) => console.log(message);

logger("Hello");*/