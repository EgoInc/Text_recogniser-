import pytesseract
from pytesseract import Output
import PIL.Image
import cv2
def checkWord(word):
    for char in word:

        if not char.isalpha():
            if char=="!" or char="-":
                pass
            else:
                return False
    return True



param = '2'
lang = 'rus'
myconfig = r"-l {} --psm 11 --oem 3".format(lang)
img_path = "./Test Images/ad.jpg"


text = pytesseract.image_to_string(PIL.Image.open(img_path),
                                   config = myconfig)
print(text)



"""__________________________________"""
img = cv2.imread(img_path)
cv2.imshow("Original", img)
height, width, _ = img.shape
boxes = pytesseract.image_to_boxes(img, config=myconfig)
# for box in boxes.splitlines():
#     box = box.split(" ")
#     img = cv2.rectangle(img, (int(box[1]), height - int(box[2])), (int(box[3]), height - int(box[4])), (0, 255, 0), 2)
# # cv2.imshow("DetectedSymbols", img)


data = pytesseract.image_to_data(img, config=myconfig, output_type=Output.DICT)
print("========FINAL========")
amount_boxes =  len(data['text'])
for i in range(amount_boxes):
    text = data['text'][i]
    if checkWord(text) and text!="":
        if float(data['conf'][i]) > 70:
            print(text)
            (x, y, width, height) = (data['left'][i], data['top'][i],  data['width'][i], data['height'][i])
            img = cv2.rectangle(img, (x,y), (x+width, y+height), (255, 20, 100), 2)
            img = cv2.putText(img, text, (x, y+height+20), cv2.FONT_HERSHEY_COMPLEX, 0.7, (255 ,255 , 0), 2)


cv2.imshow("Detected_Words", img)
cv2.waitKey(0)


