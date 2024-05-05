import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://guaylcywnyvpwpgymnkj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1YXlsY3l3bnl2cHdwZ3ltbmtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NDEwMDUsImV4cCI6MjAzMDExNzAwNX0.MDZ1TwRJGZtY8UvhX1JZQQb-QvTj96LKucXVOx94vM8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;