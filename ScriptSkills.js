function showskills(){

	/*//BodyText_____________________________________________________________________________________________________________*/

	/*headline  */
	const text1 = document.getElementById("Home1").innerHTML = '';

	/*text */
	const text2 = document.getElementById("Home2").innerHTML = "";
  const text3 = document.getElementById("Home3").innerHTML = "Songs";
  const text4 = document.getElementById("Home4").innerHTML = "more";


	/*//Logo */
  const video = document.getElementById("f1").src = "https://www.youtube.com/embed/PUcnvruMVUQ";
  const video2 = document.getElementById("f2").src = "https://www.youtube.com/embed/6XREqPSbhEY";
  const video3 = document.getElementById("f3").src = "https://www.youtube.com/embed/gzHl2Q08dTM";
  const video4 = document.getElementById("f4").src = "https://www.youtube.com/embed/J_MogPC28_I";

	/*//navibarSelection_____________________________________________________________________________________________________*/

  document.getElementsByClassName("img")[0].style.display="none";
  document.getElementsByClassName("ImgBody")[0].style.display="none";
	document.getElementsByClassName("navi")[0].style.color="#999C9E";		/* Homepage	 */
	document.getElementsByClassName("navi2")[0].style.color="#999C9E";		/* About	 */
	document.getElementsByClassName("navi3")[0].style.color="#464748";		/* skill	 */
	document.getElementsByClassName("navi4")[0].style.color="#999C9E";		/* contact	 */
}
