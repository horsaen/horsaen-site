<script>
    import Footer from '../components/Footer.svelte'
</script>

<main>
    <div>
        <div class=beta-sticky>
            <span>[ BETA ]</span>
        </div>
        <div class="landing-container">
            <div class="landing-text">
                <span class="landing-top">Hey, I'm</span>
                <span class="landing-bottom">{"> Cameron"}<span class="cursor">|</span></span>
            </div>
        </div>
        <div class="container">
            <span></span>
        </div>
    </div>
    <Footer />
</main>

<style>
    .beta-sticky {
        position: fixed;
        top: 10px;
        right: 10px;font-size: 30px;
        text-orientation: mixed;
        writing-mode: vertical-lr;
    }
    .landing-container {
        min-height: 100vh;
    }
    .landing-text {
        position: absolute;
        left: 50px;
        bottom: 50px;
        display: flex;
        flex-direction: column;
        font-size: 76px;
    }
    .landing-top {
        padding-right: 300px;
    }
    .landing-bottom {
        display: flex;
        background-color: #fff;
        color: #000;
        width: fit-content;
    }
    .cursor {
        animation: 1.5s blink step-end infinite;
    }
    @keyframes blink {
        from, to {
            color: transparent;
        }
        50% {
            color: #000;
        }
    }
    .container {
        min-height: 100vh;
    }
</style>