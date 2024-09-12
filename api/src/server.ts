import App from './app';

const port = process.env.PORT;

App.listen(port, () => {
    console.log(`[server]: Server rodando em http://localhost:${port}`);
});
