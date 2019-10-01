export default class StringTool {

    static fileToTimestamp(file: File): string {
        let array = file.name.split(".")
        return array[0] + new Date().getTime() + "." + array[1]
    }

}