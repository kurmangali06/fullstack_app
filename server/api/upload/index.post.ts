import multer from 'multer';
import { callNodeListener } from 'h3';

let originalFileName = '';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cbd) => {
    originalFileName = `${crypto.randomUUID()}.png`;
    cbd(null, originalFileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpeg') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  },
});

export default defineEventHandler(async (event) => {
  try {
    await callNodeListener(
      // @ts-expect-error: Nuxt 3
      upload.single('file'),
      event.node.req,
      event.node.res
    );
    const path = originalFileName;
    return path;
  } catch (error: any) {
    console.log(error.message);
    return createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.',
    });
  }
});