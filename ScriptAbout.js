function showabout(){

	/*//BodyText_____________________________________________________________________________________________________________*/
  var content = "We're a metal band from Ingolstad in Germany";
	/*//headline  */
	var text = document.getElementById("Home1").innerHTML = 'About';

	/*//text */
	var text = document.getElementById("Home2").innerHTML = content;
    const text3 = document.getElementById("Home3").innerHTML = "";
    const text4 = document.getElementById("Home4").innerHTML = "";

	/*//Logo */
  const video = document.getElementById("f1").src = "";
  const video2 = document.getElementById("f2").src = "";
  const video3 = document.getElementById("f3").src = "";
  const video4 = document.getElementById("f4").src = "";


	/*//navibarSelection______________________________________________________________________________________________________*/
  document.getElementsByClassName("img")[0].style.display="none";
  document.getElementsByClassName("ImgBody")[0].style.display="none";
	document.getElementsByClassName("navi")[0].style.color="#999C9E";		/* Homepage	 */
	document.getElementsByClassName("navi2")[0].style.color="#464748";		/* About	 */
	document.getElementsByClassName("navi3")[0].style.color="#999C9E";		/* skill	 */
	document.getElementsByClassName("navi4")[0].style.color="#999C9E";		/* contact	 */
}
