migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i08of81blvodsrm")

  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i08of81blvodsrm")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
