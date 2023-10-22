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

    
    onMount(() => {
        hackerEffect(randomChars(14),"Justiniscoding",0,15,text => {
            nameEl.innerText = text;
        });
        scrollingEffectSetup();
    });

    function scrollingEffectSetup(){
        const controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            duration:500,
            offset:0
        });

        const timeline = new TimelineMax();

        timeline.to(".page1",1,{scale: 0.75});
        timeline.to(".page1",1,{translateX:"-100%"});
        timeline.to(".page2",1,{translateX:"100%"});
    
        scene.setTween(timeline);
        scene.addTo(controller);
        scene.setPin(".page1");
        scene.addIndicators();
    }

</script>

<style>
    #name{
        text-align: center;

        color:#0FFF50;

        font-size:6.5vw;
        font-family: monospace;
        font-weight: 100;
        letter-spacing: 0.5rem;

        margin-top:-40vh;
    }

    .container{
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

    .page2{
        display:flex;

        background-color: red;
    }
</style>