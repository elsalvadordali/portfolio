

<navbar>
    <input type='text' value='' placeholder='search' />
</navbar>

<style>
    navbar {
        position: fixed;
        left: 0px;
        top: 0;
        width: 99vw;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
    }
    input {
        justify-self: flex-end;
        background-color: transparent;
        border: 0;
        color: inherit;
        font-size: 1rem;
        outline: 0;
        border-bottom: 2px solid #000;
        padding: 1rem;
    }
    @media (prefers-color-scheme: dark) {
        input {
            background-color: 000;
            border-color: #f1afa8;
        }
    }
</style>