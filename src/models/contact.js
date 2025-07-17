import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;



// import mongoose from 'mongoose';

// const ContactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
// }, { timestamps: true });

// export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);


