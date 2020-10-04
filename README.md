# Subrenamer
Application to rename all the subtitles (or even the media file names) in a folder

# Usage
To use the application, you must put all your subtitle files on a folder called ```rename``` on the same root directory as the *script.js*, and
run the script file with the following arguments:

```node script.js <series_name> <initial_episode>```

where:

- ```<series_name>``` represents the desired series name to your subtitles (should be aimed to match the media file name)
- ```<initial_episode>``` indicates what is the starting episode of the series, so the first subtitle will be renamed accordingly

# Useful information
- This application can rename mostly any group of files with the same file extension in the ```rename``` folder, so it's possible to rename all your
episode media files to a desired simple filename, and then use this same desired filename to rename all the subtitles in a simpler way
- If your ```<series_name>``` includes white spaces, dont forget to put it between simple quotation marks (e.g ```node script.js 'Attack on Titan' 1```)
