<main>
    <div>
        <div class="landing-container">
            <div class="landing-text">
                <span class="landing-top">Hey, I'm</span>
                <span class="landing-bottom">{"> Cameron"}<span class="cursor">|</span></span>
            </div>
        </div>
    </div>
</main>

<style>
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
</style>