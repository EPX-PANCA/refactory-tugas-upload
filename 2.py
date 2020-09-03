import datetime

f = open("app.log", "a")
date = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%SZ')

class Log:

    def write(text, level="INFO"):
        f.write(f"[{date}] {level}: {text}"+"\n")

    def info(self,text):
        Log.write(text)

    def error(self,text):
        Log.write(text,"ERROR")

    def notice(self,text):
        Log.write(text,"NOTICE")

    def warning(self,text):
        Log.write(text,"WARNING")

    def debug(self,text):
        Log.write(text,"DEBUG")

    def alert(self,text):
        Log.write(text,"ALERT")

    def critical(self,text):
        Log.write(text,"CRITICAL")

    def emergency(self,text):
        Log.write(text,"EMERGENCY")

log = Log()

log.info("This is an information about something.")
log.error("We can't divide any numbers by zero.")
log.notice("Someone loves your status.")
log.warning("Insufficient funds.")
log.debug("This is debug text.")
log.alert("Achtung! Achtung!")
log.critical("Medic!! We've got critical damages.")
log.emergency("System hung. Contact system administrator immediately!")