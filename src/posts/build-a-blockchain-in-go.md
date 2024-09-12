---
title: "Building a Blockchain in Go"
description: "PT I - The Hello World of Blockchains"
date: "2021-03-08"
---

Hello everyone!

I recently have been trying to learn go, and with all of the recent hype around NFT and crypto, I thought instead of learning solidity I would go ahead and power through and continue learning go. However I still wanted the super trendy hip developer kudos for doing something with the  blockchain. I looked up some tutorials and then after following them and having a bit of trouble, I thought to share with all of you.

There were two things I was learning throughout this process. They were go and blockchain. If I have learned anything in the time that I have been writing and trying to share knowledge, it is that we should stick to explaining one thing at a time. In light of this newfound wisdom, I will not be teaching you much of the go syntax, as I think it is the easier of the two to grok. Go does have some complex paradigms around channels and routines, but we won't be using that in this tutorial.

I will teach you one thing about golang. We will need to configure go to compile onto our local machine. I am in Windows, and so that is the perspective that you will find here. It honestly should not be different on macOS/Linux as I far as I am aware
## Go Configuration

You will want to install go over [here](https://golang.org/dl/)

Normally if you look at a tutorial of Go and how to get it configured you will hear a lot about a GOPATH. This was a big pain and I only figured out afterwards that you do not in fact need to setup all of this. There is a go module system, which works similarly to npm or pip.

All we need to get started is to have go installed at this point.

Now we make a new project folder and sling some code.

`mkdir learnBlockChain && cd learnBlockChain`

Excellent. Now we can get the go module system going. you can name it whatever you would like, but I would recommend following my format but substituting your username.

`go mod init github.com/nheingit/learnBlockChain`

This should get you a new file in your project folder called `go.mod`

```go
//go.mod
module github.com/nheingit/learnBlockChain
```

You will be able to use whatever 3rd party package, and then whenever you use the run command, it will pull in the relevant packages and import them into your project. If you do not have the package already downloaded, it will usually give you the relevant command in the error message. Very neat.
![neat gif](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5d444jhvo1uzkh1y9e1u.gif)

Now that we have our mod system configured, you should be able to follow along without doing any importing. You can simply call the method as if it were already part of your project, and it should take care of the rest.

However, if that is not the case, I will put this snippet here as a backup. We are only importing 3 things, so if you get stuck on this portion you can just copy  this code and carry on.

## Import

 ```go
//main.go
package main
 
 import (
 	"bytes"
 	"crypto/sha256"
 	"fmt"
)
//rest of code here
//..
//..
//..
```


## Let's Block Out!

Now that the configuration gods have been satiated we may now begin the actual ceremony. Just follow along, and remember that while I am giving you all of the code here, you will learn much more if you type out everything. 

You need to build the muscle memory for the go syntax, and to actually think through what it is your code is doing. If you weren't interested in **actually** learning, you could just go to the git repo and copy paste the code, but you wouldn't gain too much from that.

In your terminal we can run`touch main.go`

```go
//go.main

1 package main
2 
3 func main() {
4 
5 }
```

Now that we have our `main.go` file ready, we need to reason about what a blockchain is at a lower level. Luckily for us, as with most compound words we can break up the words into their separate parts and divine some meaning from it. 

### Block
Let us start with the block. Our block from the blockchain will need to consist of three different fields. Since the main appeal of the blockchain is how secure it is, we are going to need some hashing. Hashing wouldn't be particularly useful unless there was some data inside that was worth protecting or preserving in some fashion, so we also need some data. The last element will be how our blocks chain together, so we will also want the previous hash from the block that was before us.

If we translate everything I just said into golang we should come up with something that looks like this

```go
// main.go
type Block struct {
  Hash     []byte
  Data     []byte
  PrevHash []byte
}
```

Congratulations, you now have a Block®. Well a block by itself is not very useful now is it. Let's get a chain for this sucker and get it goin'! 

## Chain
The chain portion of a blockchain is just the collection of blocks all together. I think that sounds like a good use case for an array.

```go
// main.go
type BlockChain struct{
  blocks []*Block
}
```

Excellent! Now you are the proud owner of ye olde block 'n' chain.

But there's a problem now of we can't really **do** anything with just this. It needs some functionality. I bet a function could help us out with that.

## Functions

```go
// All of these functions will be in main.go
```

I think a useful place to start would be to hash the data that we give the block. We will hash the current data in the block, as well as the block before us, to create a dependency chain. This hashing of the previous block is integral to the dependability of the blockchain. Without this string of connections, we would not be able to verify the integrity of the system programmatically.

```go
func (b *Block) DeriveHash() {
  info := bytes.Join([][]byte{b.Data, b.PrevHash}, []byte{})
  // This will join our previous block's relevant info with the new blocks
  hash := sha256.Sum256(info)
  //This performs the actual hashing algorithm
  b.Hash = hash[:] 
  //If this ^ doesn't make sense, you can look up slice defaults
}
```
Now that we are able to hash our data how we would like, I think the next step would be to actually use this hashing capability. creating a new block sounds like a great place to flex our sick  hashing skills.

```go
func CreateBlock(data string, prevHash []byte) *Block {
	block := &Block{[]byte{}, []byte(data), prevHash}
        //If this is gibberish to you look up
        // pointer syntax in go
	block.DeriveHash()
	return block
}
```
Great job! We can now create all of the blocks.
However creating many many blocks will not do too many interesting things in this case. We need a blockchain to tie everything together.

```go
func (chain *BlockChain) AddBlock(data string) {
	prevBlock := chain.blocks[len(chain.blocks)-1]
	new := CreateBlock(data, prevBlock.Hash)
	chain.blocks = append(chain.blocks, new)
}
```
With the ability to `AddBlock` to the chain, we can start wrapping up here. There is just one catch. We have no way to make the **first** block in the chain. This is because in all of our functions we are relying upon a `PrevHash` from the block before us. So we need to create the OG block for the chain.

```go
func Genesis() *Block {
	return CreateBlock("Genesis", []byte{})
}
```

Last thing we need to do before we're Blockin' 'n' Chainin' to our hearts content is to initialize a new blockchain with the new `Genesis` block we made.

```go
func InitBlockChain() *BlockChain {
	return &BlockChain{[]*Block{Genesis()}}
}
```
Now we have all the functionality we need to make a blockchain! that means we get to start writing in our main function. In the vein of "hello world" scope of tutorial for blockchains, I want to print out the fields of all of my `Blocks` in my `BlockChain` and call it a day.

```go
func main() {

	chain := InitBlockChain()

	chain.AddBlock("first block after genesis")
	chain.AddBlock("second block after genesis")
	chain.AddBlock("third block after genesis")

	for _, block := range chain.blocks {
		fmt.Printf("Previous hash: %x\n", block.PrevHash)
		fmt.Printf("data: %s\n", block.Data)
		fmt.Printf("hash: %x\n", block.Hash)
	}

}
```
We now put this in the terminal `go run main.go`

That should yield you an output of something like this:
```
Previous hash: 
data: Genesis
hash: 81ddc8d248b2dccdd3fdd5e84f0cad62b08f2d10b57f9a831c13451e5c5c80a5
Previous hash: 
data: first block after genesis
hash: ce6cc03696fed9f5d0f45d0b26fd4f654df50201281be273248e2184e507586e
Previous hash: 
data: second block after genesis
hash: 7e964d1d2887bb2def988d7dfc85d935836d686ce7d101cbcb61716229d74386
Previous hash: 
data: third block after genesis
hash: f5fc87251c9c8d0be886c0d180b42beb9662de3224c2d87df4ee75427655dc45
```
You should note that you can see that first Genesis block doesn't have a Previous hash, which is why we needed that special functionality.

I hope you enjoyed reading and didn't find anything too easy, or too difficult! I'll close out here by showing a few resources that I used to make this application!

# Shoutouts/Resources

the [code](https://repl.it/@nheingit/GolangBlockChain) you should end up with.

If you would like to watch the video where I learned how to do this whole blockchain thing, its right here. You will learn to code this exact project in video form from [this](https://www.youtube.com/watch?v=mYlHT9bB6OE&ab_channel=TensorProgramming) excellent gentleman.

Here's the repo: https://github.com/tensor-programming/golang-blockchain

also another great learning resource if you're really trying to get into developing crypto and Ethereum with solidity  is [DappUniversity](https://www.youtube.com/channel/UCY0xL8V6NzzFcwzHCgB8orQ)



# Shoutouts/Resources

If you would like to watch the video where I learned how to do this whole blockchain thing, its right here. You will learn to code this exact project in video form from [this](https://www.youtube.com/watch?v=mYlHT9bB6OE&ab_channel=TensorProgramming) excellent gentleman.

Here's the repo: https://github.com/tensor-programming/golang-blockchain

also another great learning resource if you're really trying to get into developing crypto and Ethereum with solidity  is [DappUniversity](https://www.youtube.com/channel/UCY0xL8V6NzzFcwzHCgB8orQ)