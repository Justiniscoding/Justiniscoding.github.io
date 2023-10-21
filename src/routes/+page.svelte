<div class="container">
    <div class="page page1">
        <h1 id="name" bind:this={nameEl}> </h1>
    </div>
    <div class="page page2">
        page2
    </div>
</div>


<script>
    import {hackerEffect, randomChars} from "$lib/hackerEffect.js"

    import {onMount} from "svelte";
    
    let nameEl;

    // TODO: Make name an HTML tag, like <Justiniscoding/>

    
    // const controller = new ScrollMagic.Controller();
    
    // var scene = new ScrollMagic.Scene({
        //     duration:100,
        //     offset:50
        // });
        
        // scene.setPin("#name");
        
        // scene.addTo(controller);
        
        onMount(() => {
            hackerEffect(randomChars(14),"Justiniscoding",0,25,text => {
                nameEl.innerText = text;
            });
            console.log(ScrollMagic);
    });

</script>

<style>
    #name{
        color:#0FFF50;

        font-size:6.5vw;
        font-family: monospace;
        font-weight: 100;
        letter-spacing: 0.5rem;

        margin-top:-40vh;
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