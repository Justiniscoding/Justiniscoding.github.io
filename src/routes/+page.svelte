<div class="container">
    <div class="page page1">
        <h1 id="name" bind:this={nameEl}>a</h1>
    </div>
    <div class="page page2">
        page2
    </div>
</div>

<script>
    import { onMount } from "svelte";

    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890[];?!@#$%&*()+".split("");

    let nameEl;

    onMount(() => {
        nameEl.innerText = randomChars(12);
        console.log(randomChars(2));
    });

    function hackerEffect(text,iterationNumber, delay){
        let textArray = text.split("");

        

        setTimeout(() => hackerEffect(text,++iterationNumber),delay);
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
        color:black;

        font-size:7vw;
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

        background-color: lightgoldenrodyellow;
    }
</style>