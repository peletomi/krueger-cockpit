module App.Domain where

type alias AppGroupInfo = { applicationId : String, appInfo : List AppInfo }

type alias AppInfo = { applicationId : String, ip : String }
