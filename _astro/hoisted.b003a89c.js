document.querySelectorAll("details").forEach(e=>{e.addEventListener("click",t=>{const r=e.querySelector("summary");r&&(r.contains(t.target)||(t.stopPropagation(),t.preventDefault()))},!0)});
