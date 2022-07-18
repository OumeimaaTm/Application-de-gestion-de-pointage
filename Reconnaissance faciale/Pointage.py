from time import sleep
import cv2
import numpy as np
import face_recognition
import os
from datetime import datetime

from collections import Counter
path = 'ImagesDePresence'
#liste des images capturés
images = []
#liste des noms des personnes présents et capturés
Names = []
# liste des images de dossier(visages de la bd)
myList = os.listdir(path)

In=[]
Out=[]

#Ajouter l'image de personne capturé et son nom , et Affichier la liste de tous les agents enregistrées dans la BD
for cl in myList:
    curImg = cv2.imread(f'{path}/{cl}')
    #ajouter notre image
    images.append(curImg)
    Names.append(os.path.splitext(cl)[0])
print('\n Liste des agents inscrits : \n' , Names)


#Encoder les images capturés 
def findEncodings(images):
   encodeList = []
   for img in images:
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        encode = face_recognition.face_encodings(img)[0]
        encodeList.append(encode)
   return encodeList


def countX(lst, x):
    count = 0
    for ele in lst:
        if (ele == x):
            count = count + 1
    return count


def markPresence(name):
    with open('fiche/Presence.csv', 'r+') as f:
      
        nameList = []
        L = []
        now = datetime.now()
        dtString = now.strftime('%H:%M:%S')
        myDataList = f.readlines()
        for line in myDataList:
            entrée = line.split(',')
            nameList.append(entrée[0])
        occ =nameList.count(name)
        if (occ % 2) == 0 :
            f.writelines(f'{name},{dtString} , IN \n')
            In.append(name)
        else :
            f.writelines(f'{name},{dtString} , OUT \n')
            Out.append(name)

        


#Absence
def markAbsence():
    with open('fiche/Presence.csv', 'r+') as P , open('fiche/Absence.csv', 'r+') as A :
        A.truncate(0)
        ListAbsence = []
        ListPresence = []
        ListALL = []
    
        dir_list = os.listdir("./ImagesDePresence")
        myDataList = P.readlines()
        myDataList2 = A.readlines()
        for line in myDataList:
            entrée = line.split(',')
            ListPresence.append(entrée[0])

        for name in dir_list :
            ListALL.append(name.rsplit('.', 1)[0].rstrip())

        for line in myDataList2:
            ListAbsence.append(line.replace("\n",""))

    
        for  name in ListALL :
            if name.upper() not in ListPresence :
                   A.writelines(f'{name} \n')


           
encodeListKnown = findEncodings(images)
print('\n Numr de agents inscrits \n ' ,len(encodeListKnown) )
print('\n Encoding Complete')

cap = cv2.VideoCapture(0)

while True:
    success, img = cap.read()
    imgS = cv2.resize(img,(0,0),None,0.25,0.25)
    imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)

    encode = face_recognition.face_encodings(img)[0]

    facesCurFrame = face_recognition.face_locations(imgS)
    encodesCurFrame = face_recognition.face_encodings(imgS, facesCurFrame)

    for encodeFace, faceLoc in zip(encodesCurFrame, facesCurFrame):
        matches = face_recognition.compare_faces(encodeListKnown, encodeFace)
        faceDis = face_recognition.face_distance(encodeListKnown, encodeFace)
        #print(faceDis)
    matchIndex = np.argmin(faceDis)

    if matches[matchIndex]:
        name = Names[matchIndex].upper()
        #print(name)
        y1, x2, y2, x1 = faceLoc
        y1, x2, y2, x1 = y1 * 4, x2 * 4, y2 * 4, x1 * 4
        cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)
        cv2.rectangle(img, (x1, y2 - 35), (x2, y2), (0, 255, 0), cv2.FILLED)
        cv2.putText(img, name, (x1 + 6, y2 - 6), cv2.FONT_HERSHEY_COMPLEX, 1, (255, 255, 255), 2)
      
        markPresence(name.strip())
        markAbsence()
   
    break 

    cv2.imshow('Webcam', img)
    cv2.waitKey(1)