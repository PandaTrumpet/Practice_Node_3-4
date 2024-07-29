// import { Schema, model } from 'mongoose';

// const productSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     prise: {
//       type: Number,
//       required: true,
//     },
//     discount: {
//       type: Number,
//       required: false,
//       default: 0,
//     },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   },
// );

// export const ProductsCollection = model('products', productSchema);
import { model, Schema } from 'mongoose';

const productShema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: false,
      default: 0,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ProductCollection = model('product', productShema);
