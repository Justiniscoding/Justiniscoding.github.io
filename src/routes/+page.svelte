<div class="container">
    <div class="page page1">
        <h1 id="name" bind:this={nameEl}> </h1>
        <Socials/>
    </div>
    <div class="page page2">
        pagee
    </div>
</div>


<script>
    import {hackerEffect, randomChars} from "$lib/hackerEffect.js"

    import Socials from "../components/socials.svelte"

    import {onMount} from "svelte";
    
    let nameEl;

    //TODO: Make name an HTML tag, like <Justiniscoding/>

    
    onMount(() => {
        hackerEffect(randomChars(14),"Justiniscoding",0,15,text => {
            nameEl.innerText = text;
        });
        scrollingEffectSetup();
    });

    function scrollingEffectSetup(){
        const controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            duration:400,
            offset:0
        });

        const timeline = new TimelineMax();

        timeline.to(".page1",1,{scale: 0.75});
        timeline.to(".page1",1,{translateX:"-100%"});
        timeline.fromTo(".page2",1,{translateX:"100%", scale:0.75},{translateX:"0%"});
        timeline.to(".page2",1,{scale:1});
    
        scene.setTween(timeline);
        scene.addTo(controller);
        scene.setPin(".container");
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

        margin:0;

        padding-top:20vh;
    }

    .container{
        height:100vh;
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
        background-color: black;
    }

    .page2{
        scale:1;

        position:absolute;

        top:0;
        left:0;
        z-index:-1;

        background-color: red;
    }
</style>