function showcontact(){

	/*//BodyText_____________________________________________________________________________________________________________*/

  var content = "Moonfaymetal@gmail.com"+
                "</br></br>"
                +'<a href="https://www.youtube.com/channel/UCCMsNANifHUpSxs_sYCRgjA" target="_blank">'+'<img alt="Qries" src="ytIcon.png"width=50" height="50">'
                +'<a href="https://www.facebook.com/MoonFayMetal" target="_blank">'+'<img alt="Qries" src="fbIcon.png"width=50" height="50">';
	/*//headline  */
	var text = document.getElementById("Home1").innerHTML = 'Contact';

	/*//text */
	var text = document.getElementById("Home2").innerHTML = content;
    const text3 = document.getElementById("Home3").innerHTML = "";
    const text4 = document.getElementById("Home4").innerHTML = "";


	/*//Logo */
  const video = document.getElementById("f1").src = "";
  const video2 = document.getElementById("f2").src = "";
  const video3 = document.getElementById("f3").src = "";
  const video4 = document.getElementById("f4").src = "";

	/*//navibarSelection_____________________________________________________________________________________________________*/
  document.getElementsByClassName("img")[0].style.display="none";
  document.getElementsByClassName("ImgBody")[0].style.display="none";
	document.getElementsByClassName("navi")[0].style.color="#999C9E";		/* Homepage	 */
	document.getElementsByClassName("navi2")[0].style.color="#999C9E";		/* About	 */
	document.getElementsByClassName("navi3")[0].style.color="#999C9E";		/* skill	 */
	document.getElementsByClassName("navi4")[0].style.color="#464748";		/* contact	 */
}
