import app from "./src/app.mjs"
import mongoose from "mongoose"

const main = () => {

    app.listen(app.get("port"))
    console.log(`server on port ${app.get("port")}`)
    mongoose.connect('mongodb+srv://00078322:admin1234@cluster0.j5v2wwr.mongodb.net/?retryWrites=true');
    const db =  mongoose.connection;
    db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
    db.once('open', () => {
        console.log('Conectado a MongoDB');
    });

}

main();