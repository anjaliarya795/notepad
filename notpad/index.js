function handleSubmit(){
    console.log("submit")
    const content = document.getElementById("content")
    const title = document.getElementById("title")
    console.log(content.value)
    console.log(title.value)

    const elm = `
        <div class="card">

        <!-- note heading starts here -->

            <div class="header">
                <p class="title">✏️${title.value}</p>

                <!-- underline button -->

                    <button id="underline" class="icon tooltip">
                        <u>U</u>
                        <span class="tooltiptext">underline</span>
                    </button>

                <!-- underline button -->

            </div>
        
        <!-- note heading ends here -->


            <hr>

            <div class="note_text">
                <p>
                    ${content.value}
                </p>
            </div>

            <hr id="footer-line">

            <div class="footer">
                <p class="text">${new Date().toDateString()}</p> 
            </div>

            <button class="copy tooltip" title="Click to copy!">📋</button>
        </div>
   `
    console.log(elm)
   const parent = document.querySelector(".content")
   parent.innerHTML += elm
}
