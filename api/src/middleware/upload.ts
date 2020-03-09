import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

// START - TP ADDED
const { AWS_REGION, AWS_ACCESS_KEY, AWS_SECRET_KEY, S3_BUCKET_NAME } = process.env;

const s3 = new aws.S3({
  region: AWS_REGION,
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY
});
// END - TP ADDED

export default multer({
  storage: multerS3({
    s3,
    bucket: S3_BUCKET_NAME,
    key: (req, file, cb) => {
      const filename = file.originalname;
      const fileExtension = filename.split('.').pop();
      cb(null, `${Date.now()}.${fileExtension}`);
    }
  })
});
