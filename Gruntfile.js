module.exports = (grunt) => {
  // Project configuration.
  grunt.initConfig({
    aws: grunt.file.readJSON('.aws.json'), // Read the file
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>', // Use the variables
        secretAccessKey: '<%= aws.AWSSecretKey %>', // You can also use env variables
      },
      prod: {
        options: {
          bucket: 'restaurant-info',
        },
        files: [
          {
            expand: true, cwd: 'client/dist/', src: ['bundle.js'], dest: 'restaurantinfo/',
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-aws-s3');

  // Default task(s).
  grunt.registerTask('default', ['aws_s3:prod']);
};
