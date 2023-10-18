<div class="container">
    <div class="page page1">
        <h1 id="name" bind:this={nameEl}> </h1>
    </div>
    <div class="page page2">
        page2
    </div>
</div>


<script>
    import { onMount } from "svelte";
    
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890[];?!@#$%&*()+".split("");
    
    let nameEl;

    // TODO: Make name an HTML tag, like <Justiniscoding/>
    // ? Maybe make the background black and make the text a glow-in-the-dark green

    onMount(() => {
        nameEl.innerText = randomChars(14);

        hackerEffect(nameEl.innerText,"Justiniscoding",0,25);
    });

    function hackerEffect(text,result,iterationNumber,delay){
        let textArray = text.split("");
        
        for(var i = 0; i < textArray.length; i++){
            if(iterationNumber / 10 < i+1){
                textArray[i] = randomChar();
            }else if(iterationNumber / 10 == i+1){
                textArray[i] = result.charAt(i);
            }
        }

        nameEl.innerText = textArray.join("");

        setTimeout(() => hackerEffect(textArray.join(""),result,++iterationNumber,delay),delay);
    }

    function randomChar(){
        return chars[Math.floor(Math.random() * chars.length)];
    }

    function randomChars(amount){
        return new Array(amount).fill(" ").map(el => randomChar()).join("");
    }
</script>

<style>
    #name{
        color:white;

        text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18;

        font-size:6.5vw;
        font-family: monospace;
        font-weight: 100;
        letter-spacing: 0.5rem;

        margin-top:-40vh;
    }

    .is{
        color:hsl(240, 100%, 35%);
    }

    .container{
        /* scroll-snap-type: proximity; */
        padding:0;
        margin:0;
    }

    .page{
        margin:0;
        padding:0;
        width:100vw;
        height:100vh;
    }

    .page1{
        display:flex;
        align-items: center;
        justify-content: center;

        background-color: black;
    }
</style>