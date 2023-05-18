// Importa los módulos necesarios
const bcrypt = require('bcrypt');

// Lógica para el endpoint de registro de usuario
exports.register = async (req, res) => {
    try {
        // Obtiene los datos del nuevo usuario del cuerpo de la solicitud
        const { username, password } = req.body;

        // Verifica si ya existe un usuario con el mismo nombre de usuario
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
        }

        // Crea una instancia del modelo de usuario con los datos proporcionados
        const newUser = new User({
            username,
            password,
        });

        // Por ejemplo, puedes encriptar la contraseña antes de almacenarla
        const hashedPassword = await bcrypt.hash(password, 10);

        // Lógica para guardar el usuario en la base de datos
        await newUser.save();

        // Devuelve una respuesta de éxito
        res.json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error de servidor' });
    }
};

// Lógica para el endpoint de envío de correo electrónico de recuperación de contraseña
exports.forgotPassword = async (req, res) => {
    try {
        // Obtiene el correo electrónico del cuerpo de la solicitud
        const { email } = req.body;

        // enviar un correo electrónico de recuperación de contraseña
        // Importa los módulos necesarios
        const nodemailer = require('nodemailer');

        // Lógica para el endpoint de envío de correo electrónico de recuperación de contraseña
        exports.forgotPassword = async (req, res) => {
            try {
                // Obtiene el correo electrónico del cuerpo de la solicitud
                const { email } = req.body;

                // Genera un token de restablecimiento (puedes usar una librería como `crypto` para generar un token único)
                const resetToken = generateResetToken();

                // Guarda el token de restablecimiento en la base de datos asociado al usuario correspondiente

                // Crea el transporter para enviar el correo electrónico
                const transporter = nodemailer.createTransport({
                    // Configura los detalles del servicio de correo electrónico que vayas a utilizar (por ejemplo, SMTP)
                });

                // Configura los detalles del correo electrónico
                const mailOptions = {
                    from: 'tu_correo_electronico@gmail.com',
                    to: email,
                    subject: 'Recuperación de contraseña',
                    html: `
        <p>Has solicitado restablecer tu contraseña.</p>
        <p>Por favor, haz clic en el siguiente enlace para restablecerla:</p>
        <a href="${resetTokenLink}">Restablecer contraseña</a>
      `,
                };

                // Envía el correo electrónico
                await transporter.sendMail(mailOptions);

                // Devuelve una respuesta de éxito
                res.json({ message: 'Se ha enviado un correo electrónico de recuperación de contraseña' });
            } catch (error) {
                res.status(500).json({ message: 'Error de servidor' });
            }
        };

        // Devuelve una respuesta de éxito
        res.json({ message: 'Se ha enviado un correo electrónico de recuperación de contraseña' });
    } catch (error) {
        res.status(500).json({ message: 'Error de servidor' });
    }
};
