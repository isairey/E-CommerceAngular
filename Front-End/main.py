from typing import Optional
from fastapi import FastAPI , Request , responses
import mysql.connector
import json
import datetime
from pydantic import BaseModel
from starlette import requests
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:4200",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class produit(BaseModel):
    ref : int
    nom : str
    detail : str
    description : str
    tp : str
    qt : int
    prix : int
    img : str

class client(BaseModel):
    id:int
    nutilisateur:str
    ntelephone:int
    email:str
    password:str

@app.get("/techstore/produits/")
def aff_prd():
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="techstore")
    mycursor = mydb.cursor()
    mycursor.execute("SELECT référence,name,description,prix,image FROM produit ORDER BY prix")
    myresult = mycursor.fetchall()
    resultat=list()
    for i in myresult:
        l=dict()
        l["ref"]=i[0]
        l["nom"]=i[1]
        l["description"]=i[2]
        l["prix"]=i[3]
        l["image"]=i[4]
        resultat.append(l)
    res=str(resultat).replace("'","\"")
    f=open("./src/app/_files/produits.json","w")
    f.write(res)
    f.close
    return res

@app.get("/techstore/produits/{type}")
def aff_prd(type:str):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="techstore")
    mycursor = mydb.cursor()
    mycursor.execute("SELECT référence,name,description,prix,image FROM produit where type='"+type+"' ORDER BY prix")
    myresult = mycursor.fetchall()
    resultat=list()
    for i in myresult:
        l=dict()
        l["ref"]=i[0]
        l["nom"]=i[1]
        l["description"]=i[2]
        l["prix"]=i[3]
        l["image"]=i[4]
        resultat.append(l)
    res=str(resultat).replace("'","\"")
    f=open("./src/app/_files/type.json","w")
    f.write(res)
    f.close
    return res

@app.get("/techstore/produits/detail/")
def aff_prd(ref:int):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="techstore")
    mycursor = mydb.cursor()
    mycursor.execute("SELECT référence,name,details,quantité,prix,image,images,caracteristique FROM produit where référence='"+str(ref)+"'")
    myresult = mycursor.fetchall()
    resultat=list()
    for i in myresult:
        l=dict()
        l["ref"]=i[0]
        l["nom"]=i[1]
        l["details"]=i[2]
        l["quantite"]=i[3]
        l["prix"]=i[4]
        l["image"]=i[5]
        l["images"]=i[6]
        l["caracteristique"]=i[7]
        resultat.append(l)
    res=str(resultat).replace("'","\"")
    res=str(res).replace("\\\"","\"")
    res=str(res).replace("None","\"\"")
    f=open("./src/app/_files/produit.json","w")
    f.write(res)
    f.close
    return res

@app.post("/techstore/client/")
async def ajout_etdre(req:Request):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="techstore")
    mycursor = mydb.cursor()
    etd = json.loads(await req.body())
    mycursor.execute("INSERT INTO client (id, nutilisateur, ntelephone, email, password) VALUES (NULL,'"+etd["nom"]+"','"+etd["ntelephone"]+"','"+etd["email"]+"','"+etd["mdp"]+"')")
    mydb.commit()
    chaine=str(mycursor.rowcount)+" client ajouté" 
    return {"resultat":chaine}


@app.get("/techstore/compte/")
def aff_prd():
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="techstore")
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM client")
    myresult = mycursor.fetchall()
    resultat=list()
    for i in myresult:
        l=dict()
        l["id"]=i[0]
        l["nutilisateur"]=i[1]
        l["ntelephone"]=i[2]
        l["email"]=i[3]
        l["password"]=i[4]
        resultat.append(l)
    res=str(resultat).replace("'","\"")
    res=str(res).replace("\\\"","\"")
    f=open("./src/app/_files/compte.json","w")
    f.write(res)
    f.close
    return res

@app.get("/techstore/compte/connecte/")
def aff_prd(id:str):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="techstore")
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM client where id='"+str(id)+"'")
    myresult = mycursor.fetchall()
    resultat=list()
    for i in myresult:
        l=dict()
        l["id"]=i[0]
        l["nutilisateur"]=i[1]
        l["ntelephone"]=i[2]
        l["email"]=i[3]
        l["password"]=i[4]
        resultat.append(l)
    res=str(resultat).replace("'","\"")
    res=str(res).replace("\\\"","\"")
    f=open("./src/app/_files/comptec.json","w")
    f.write(res)
    f.close
    return res

@app.post("/techstore/client/update/")
async def ajout_etdre(req:Request):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="techstore")
    mycursor = mydb.cursor()
    etd = json.loads(await req.body())
    mycursor.execute("update client set nutilisateur='"+etd["nom"]+"',ntelephone='"+etd["ntelephone"]+"', email='"+etd["email"]+"',password='"+etd["mdp"]+"' where id='"+etd["id"]+"'")
    mydb.commit()   
    chaine=str(mycursor.rowcount)+" client ajouté" 
    return {"resultat":chaine}


@app.post("/techstore/commande/")
async def ajout_cmd(req:Request):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="techstore")
    mycursor = mydb.cursor()
    etd = json.loads(await req.body())
    mycursor.execute("INSERT INTO commande (commande_id,référence,pnom,id, detail_c, total_cmd,date_cmd,etat,payement,adresse) VALUES (NULL,'"+str(etd["ref"])+"','"+etd["nom"]+"','"+str(etd["id"])+"','"+str(etd["qt"])+"','"+str(etd["tt"])+"',convert(curdate(),varchar(10)),'traitement en cour','"+str(etd["payement"])+"','"+str(etd["adresse"])+"')")
    mydb.commit()
    chaine=str(mycursor.rowcount)+" commande ajouté" 
    return {"resultat":chaine}

@app.get("/techstore/commande/")
def aff_prd(id:str):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="techstore")
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM commande where id='"+str(id)+"'")
    myresult = mycursor.fetchall()
    resultat=list()
    for i in myresult:
        l=dict()
        l["commande_id"]=i[0]
        l["référence"]=i[1]
        l["pnom"]=i[2]
        l["id"]=i[3]
        l["detail_c"]=i[4]
        l["total_cmd"]=i[5]
        l["date_cmd"]=i[6]
        l["etat"]=i[7]
        l["payement"]=i[8]
        l["adresse"]=i[9]
        resultat.append(l)
    res=str(resultat).replace("'","\"")
    res=str(res).replace("\\\"","\"")
    f=open("./src/app/_files/commandes.json","w")
    f.write(res)
    f.close
    return res

@app.post("/techstore/commande/supp/")
async def ajout_cmd(req:Request):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="techstore")
    mycursor = mydb.cursor()
    etd = json.loads(await req.body())
    mycursor.execute("delete from commande where commande_id='"+str(etd["id"])+"'")
    mydb.commit()
    chaine=str(mycursor.rowcount)+" commande supprimé" 
    return {"resultat":chaine}