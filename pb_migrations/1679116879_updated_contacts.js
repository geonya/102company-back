migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i08of81blvodsrm")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i08of81blvodsrm")

  collection.createRule = null

  return dao.saveCollection(collection)
})
