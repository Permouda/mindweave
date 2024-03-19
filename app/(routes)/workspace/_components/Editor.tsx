'use client'
import React, { useEffect, useRef, useState } from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from "@editorjs/list";
import Checklist from '@editorjs/checklist';
import Paragraph from '@editorjs/paragraph';
import Table from '@editorjs/table';
import CodeTool from '@editorjs/code';
import Marker from '@editorjs/marker';
import { toast } from 'sonner';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FILE } from '../../dashboard/_components/FileList';

const rawDocument={
  "time" : 1550476186479,
  "blocks" : [{
    data:{
      text:'Document Name',
      level:2
    },
    id:"123",
    type:'header'
  },{
    data:{
      level:4
    },
    id:"1234",
    type:'header'
  }],
  "version" : "2.8.1"
}

function Editor({onSaveTrigger,fileId,fileData}:{onSaveTrigger:any,fileId:any,fileData:FILE}) {

  // GPT Solution
  const [editorInitialized, setEditorInitialized] = useState(false);

  const ref=useRef<EditorJS>()
  const updatedocument=useMutation(api.files.updateDocument);
  const [document,setDocument]=useState(rawDocument);
    useEffect(()=>{
      if (!editorInitialized) {
        fileData&&initEditor();
    }

    },[fileData])

    useEffect(()=>{
      console.log("trigger value", onSaveTrigger);
      onSaveTrigger && onSaveDocument();
    },[onSaveTrigger])


    const initEditor=()=>{
      
        const editor = new EditorJS({
            /**
             * Id of Element that should contain Editor instance
             */
            tools:{
              header: {
                class: Header,
                shortcut: 'CMD+SHIFT+H',
                config: {
                placeholder:'Enter a Header'
                
                }
              },
              list: {
                class: List,
                inlineToolbar: true,
                config: {
                  defaultStyle: 'unordered'
                }
              },
              paragraph: {
                class: Paragraph,
                inlineToolbar: true,
              },
              checklist: {
                class: Checklist,
                inlineToolbar: true,
              },
              table: {
                class: Table,
                inlineToolbar: true,
                config: {
                  rows: 2,
                  cols: 3,
                },
              },
              Marker: {
                class: Marker,
                shortcut: 'CMD+SHIFT+M',
              },
              code: CodeTool,
            },
            
            holder: 'editorjs',
            data:fileData?.document?JSON.parse(fileData.document):rawDocument
          });
          ref.current=editor;
          // GPT Solution
          setEditorInitialized(true);
    }

    const onSaveDocument=() => {
      if(ref.current) {
        ref.current.save().then((outputData) => {
          console.log('Article data: ', outputData)
          updatedocument({
            _id:fileId,
            document:JSON.stringify(outputData)
          }).then(resp=>{
              toast('Document Updated :D')
          
          },(e)=>{
            toast("server erreur!!")
          })
        }).catch((error) => {
          console.log('Saving failed: ', error)
        });
      }
    }
  return (
    <div>
        <div id='editorjs' className='ml-20'>

        </div>
    </div>
  )
}

export default Editor