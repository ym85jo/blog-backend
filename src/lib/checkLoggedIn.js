const checkLoggedIn = (ctx, next) => {

    console.log('ctx', ctx)

    if(!ctx.state.user){
        ctx.status = 401;
        return;
    }
    return next();
}

export default checkLoggedIn;