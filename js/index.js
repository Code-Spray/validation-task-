document.getElementById("convert").addEventListener("click", (ev) => {
	let egInput = document.getElementById("eg-coin");
	let dolInput = document.getElementById("dol-coin");

	let eg = document.getElementById("eg-coin").value;
	let dol = document.getElementById("dol-coin").value;
	let alertP = document.getElementById("alertP");
	if (eg === "" && dol === "") {
		alertP.innerHTML = "Enter number please";
	} else if (eg !== "" && dol !== "") {
		alertP.innerHTML = "fill one input please";
	} else if (eg !== "") {
		dolInput.value = Number(eg) / 55.3;
		alertP.innerHTML = "";
	} else if (dol !== "") {
		egInput.value = Number(dol) * 55.3;
		alertP.innerHTML = "";
	}
});
