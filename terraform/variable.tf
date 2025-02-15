# Region name
variable "aws_region" {
  type        = string
  description = "The AWS region to put the bucket into"
  default     = "eu-central-1"
}

# Domain name 
variable "domain-name" {
  type    = string
  default = "arthurfonda.com"
}

# S3 bucket name
variable "bucket-name" {
  default = "arthurfonda.com"
}