module.exports = function (grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON("package.json"),
        transport: {
            options: {
                // 是否采用相对地址
                relative: true,
                format: '{{filename}}'
            },
            files: {
                // 相对路径地址
                'cwd': 'src',
                // 需要生成具名函数的文件集合
                src: ['views/*.js', 'mobile/views/*.js'],
                // 生成存放的文件目录。里面的目录结构与 src 里各个文件名带有的目录结构保持一致
                'dest': '.build'
            }
        },
        uglify: {
            my_target: {
                files: [
                    {
                        expand: true,
                        cwd: '.build',
                        src: ['views/*.js', 'mobile/views/*.js'],
                        dest: 'compile'
                    }
                ]
            }
        },
        clean: {
            build: ['.build']
        }
    })
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['transport','uglify','clean']);
}